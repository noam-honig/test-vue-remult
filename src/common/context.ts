

import { Context } from "@remult/core";
import { CookieBasedJwt } from './cookieBasedJwt';


const context = new Context();
export class Common {
    static authorization = new CookieBasedJwt(context);
}
export default context;



