<template>
  <div id="app">
    <div id="nav">
      <component :is="layout" >
          <rouwter-view></rouwter-view>
      </component>
    </div>
  </div>
</template>

<script>
    import EmptyLayout from "./layouts/EmptyLayout";
    import MainLayout from "./layouts/MainLayout";

    export default {
        computed: {
            layout(){
                // console.log(this.$route.meta)
                return (this.$route.meta.layout || "empty") + "-layout";

            }

        },
        components: {
            EmptyLayout,
            MainLayout
        }
    }

</script>

<style lang="scss">
  @import "~materialize-css/dist/css/materialize.min.css";
  @import "assets/index.css";

</style>
