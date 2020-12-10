<template>
    <div class="list">
        <Table
            :data="bids"
            title="Bids"
            class="list__table"
        />
        <Table
            :data="asks"
            title="Asks"
            class="list__table"
        />
    </div>
</template>

<script>
import Table from './Table.vue'

export default {
    name: 'List',
    components: {
        Table
    },
    data: () => ({
        bids: null,
        asks: null,
        symbol: "BTCUSDT",
        socket : null
    }),
    async created() {
        await this.fetchList();
        this.subscribe();
        this.$eventBus.$on('changeSymbol', async (symbol) => {
            this.symbol = symbol;
            await this.fetchList();
            this.socket.close();
            this.subscribe();
        });
    },
    methods: {
        async fetchList() {
            const data = await this.$sdk.getList(this.symbol);
            this.bids = data.bids;
            this.asks = data.asks;
        },

        subscribe() {
            this.socket = this.$sdk.subscribe(this.symbol);
            this.socket.onmessage = async ({ data }) => {
                this.$eventBus.$emit('diff', JSON.parse(data));
            }
        }
    }
}
</script>

<style lang="sass">
.list
    display: flex
    flex-wrap: wrap
    height: calc(100vh - 83px)
    padding: 10px 0 25px
    @media screen and (max-device-width: 760px)
        flex-direction: column
        flex-wrap: nowrap
        height: auto
    &__table
        &:not(:last-child)
            margin: 0 25px 0 0
            @media screen and (max-device-width: 760px)
                margin: 0 0 25px
</style>
