<template>
    <div class="border border-primary rounded-pill rounded-lg" style="width=100%; margin-top:40px;">
        <div class="row">
            <div class="col-md-6">
                <div align="left" style="margin-top: 13px; margin-left:40px;">
                    <h4>{{ title }}</h4>
                    <p>{{ description }}</p>
                </div>
            </div>
            <div class="col-md-6">
                <div align="right">
                    <button type="button" class="btn btn-lg btn-success rounded-btn" @click="finishDodo">
                        <i class="fa fa-check"></i>
                    </button>
                    <button type="button" class="btn btn-lg btn-danger rounded-btn" @click="deleteDodo" style="margin-right: 20px;">
                        <i class="fa fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                editTitle: this.$props.title,
                editDescription: this.$props.description
            }
        },
        props: [
            'id',
            'title',
            'description'
        ],
        methods: {
            finishDodo(){
                this.$store.dispatch('finishDodo', this.id);
            },
            updateDodo(){
                let editDodo = {
                    id: this.id,
                    title: this.editTitle,
                    description: this.editDescription
                };

                this.$store.dispatch('updateCurrentDodo', editDodo);
            },
            deleteDodo(){
                this.$store.dispatch('deleteDodo', this.id);
            }
        }
    }
</script>

<style scoped>
    .rounded-btn {
        margin-top: 20px;
        border-radius: 50%;
    }
    .btn-success:hover{
        background-color: lawngreen;
        border-color: lawngreen;
    }

    .btn-danger:hover{
        background-color: red;
        border-color: red;
    }

    .btn-warning:hover{
        background-color: yellow;
        border-color: yellow;
    }

    .border-primary:hover {
        background-color: dodgerblue;
        border-color: dodgerblue;
        color: white;
    }
</style>