<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectComponent = 'appQuote'">Quote</button>
                <button @click="selectComponent = 'appAuthor'">Author</button>
                <button @click="selectComponent = 'appNew'">New</button>
                <keep-alive>
                    <component :is="selectComponent">
                        <p>Default Content</p>
                    </component>
                </keep-alive>
                <!-- <app-quote>
                   <h2 slot="title">{{ quoteTitle }}</h2>
                   <p slot="content">A wonderful Quote! </p>
                 </app-quote> -->

            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './component/Quote';
    import Author from './component/Author';
    import New from './component/New';
    export default {
        data () {
            return {
                quoteTitle: 'The Quote',
                selectComponent: 'appQuote'
            }
        },
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New
        }
    }
</script>

<style scoped>
</style>