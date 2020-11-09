import { BoolColumn, Context, DateTimeColumn, EntityClass, IdEntity, ServerFunction, StringColumn, UserInfo } from "@remult/core";

import { Common } from '../common/context';
import { Roles } from './roles';




@EntityClass
export class Users extends IdEntity {
    name = new StringColumn({
        validate: () => {
            if (this.name.value.length < 3)
                this.name.validationError = 'Name is too short';
        }
    });
    isAdmin = new BoolColumn();
    createdDate = new DateTimeColumn();
    constructor() {
        super({
            name: 'users',
            allowApiRead: context => context.isSignedIn(),
            allowApiUpdate: Roles.canUpdateUsers,
            allowApiInsert: Roles.canUpdateUsers,
            saving: () => {
                if (this.isNew())
                    this.createdDate.value = new Date();
            }



        })
    }
    password = new StringColumn({ includeInApi: false });
    @ServerFunction({ allowed: true })
    static async SignIn(name: string, context?: Context) {
        const u = await context?.for(Users).findFirst(x => x.name.isEqualTo(name));
        if (!u)
            throw "user does not exist";
        const user: UserInfo = {
            id: u.id.value,
            name: u.name.value,
            roles: []
        };
        if (u.isAdmin.value) {
            user.roles.push(Roles.canUpdateUsers);
        }
        return Common.authorization.createToken(user);
    }

}

