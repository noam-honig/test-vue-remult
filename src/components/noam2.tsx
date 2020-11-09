import { Component, Prop, Vue } from "vue-property-decorator";
import Noam from './noam.vue';
@Component
export default class Noam2 extends Vue {
    counter = 0;
    
    render(createElement: any) {
        return (<div><h1 onClick={()=>this.counter++}>{this.counter}</h1></div>)
    }
}