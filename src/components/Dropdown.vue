<template>
    <div>
        <select
            v-model="activeSymbol"
            @change="onChange"
        >
            <option
                v-for="(item, idx) in symbols"
                :key="idx"
            >
                {{ item }}
            </option>
        </select>
        <ul>
            <li
                v-for="(diff, idx) in diffs"
                :key="idx"
            >
                {{ diff.type }} | {{ diff.time }} | {{ diff.symbol }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Dropdown',
    data: () => ({
        symbols: ['BTCUSDT', 'BNBBTC', 'ETHBTC'],
        activeSymbol: 'BTCUSDT',
        diffs: []
    }),
    created() {
        this.$eventBus.$on('diff', (data) => {
            this.diffs = [{
                type: data.e,
                time: new Date(data.E).toLocaleTimeString("en-US"),
                symbol: data.s,
            }, ...this.diffs];
        });
    },
    methods: {
        onChange({ target: { value } }) {
            this.$eventBus.$emit('changeSymbol', value);
        }
    }
}
</script>
