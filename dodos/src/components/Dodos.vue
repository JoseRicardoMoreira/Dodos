  <template>
    <div class="container">
        <div align="center">
            <h2 class="multicolortext">Dodos</h2>
        </div>
        <div class="row">
            <div class="col-md-2" style="margin-top: 200px;">
                <h3 style="color: blue;">{{ totalDodos }}</h3>
                <h4 style="color: blue;">Total</h4>
                <br>
                <h3 style="color: green;">{{ finishedDodos }}</h3>
                <h4 style="color: green;">Finished</h4>
                <br>
                <h3 style="color: orange;">{{ inProgressDodos }}</h3>
                <h4 style="color: orange;">In progress</h4>
                <br>
                <h3 style="color: red;">{{ canceledDodos }}</h3>
                <h4 style="color: red;">Canceled</h4>
                <br>
            </div>
            <div class="col-md-10">
                <app-dodo v-for="dodo in dodos" v-bind:key="dodo.id" :id="dodo.id" :title="dodo.title" :description="dodo.description"></app-dodo>
            </div>
        </div>
        <app-sticky-button></app-sticky-button>
    </div>
  </template>


<script>
    import Dodo from './Dodo.vue';
    import StickyButton from './StickyButton.vue';
    import { mapGetters } from "vuex";

    export default {
        components: {
            appDodo: Dodo,
            appStickyButton: StickyButton
        },
        computed:{
            ...mapGetters([
                'totalDodos',
                'finishedDodos',
                'inProgressDodos',
                'canceledDodos'
            ]),
            dodos(){
                return this.$store.getters.dodos;
            }
        }
    }
</script>

<style scoped>
.multicolortext {
    background-image: linear-gradient(to bottom right, purple, green, deepskyblue); 
    -webkit-background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text; 
    background-clip: text;
    color: transparent;
    margin-top: 20px;
}
</style>