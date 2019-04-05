<script lang="ts">
    import Vue       from 'vue';
    import Component from 'vue-class-component';

    interface NavbarLink {
        name: string,
        title: string,
        exact: boolean
    }

    @Component({

    })
    export default class Navbar extends Vue {
        data(): { links: NavbarLink[] } {
            return {
                links: [{
                    name: 'home',
                    title: 'Home',
                    exact: true
                }, {
                    name: 'statistics',
                    title: 'Statistics',
                    exact: true
                }]
            };
        }
    }
</script>

<template>
    <b-navbar variant="primary" toggleable="md">
            <b-navbar-nav>
                <b-nav-item
                    v-for="(item, index) in links"
                    :key="index"
                    :to="item"
                    :exact="item.exact"
                >
                    {{ item.title }}
                </b-nav-item>
            </b-navbar-nav>
    </b-navbar>
</template>
