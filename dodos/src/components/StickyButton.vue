<template>
    <div class="container">
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-lg btn-primary fixed" data-toggle="modal" data-target="#exampleModal">
            <i class="fa fa-plus"></i>
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">New dodo!</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="dodoTitleInput">Title</label>
                        <input type="text" class="form-control" id="dodoTitleInput" placeholder="Give your dodo a title.." v-model="title" required>
                    </div>
                    <div class="form-group">
                        <label for="dodoDescriptionTextArea">Description</label>
                        <textarea class="form-control" name="dodoDescription" id="dodoDescriptionTextArea" cols="30" rows="10" placeholder="Describe your dodo..." v-model="description" required></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" @click="createNewDodo">Create</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title: '',
            description: ''
        }
    },
    methods: {
        createNewDodo(){
            let newDodo = {
                title: this.title,
                description: this.description
            };
            this.$store.dispatch('createNewDodo', newDodo);
        }
    }
}
</script>

<style scoped>
    .fixed {
        position: fixed;
        bottom: 40px;
        right: 40px;
        border-radius: 50%;
        transition: transform 0.2s;
    }

    .fixed:hover{
        transform: scale(1.5);
    }
</style>