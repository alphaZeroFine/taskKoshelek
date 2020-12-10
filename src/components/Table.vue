<template>
    <div class="table">
        <div class="table__title">{{ title }}</div>
        <div class="table__wrap">
            <table class="table__content">
                <thead class="table__head">
                    <tr>
                        <th class="table__th">
                            Price
                        </th>
                        <th class="table__th">
                            Ammount
                        </th>
                        <th class="table__th table__th-total_mobile">
                            Total
                        </th>
                    </tr>
                </thead>
                <tbody class="table__content">
                    <tr
                        v-for="([amount, price], idx) in data"
                        :key="idx"
                    >
                        <td class="table__td">
                            {{ amount }}
                        </td>
                        <td class="table__td">
                            {{ price }}
                        </td>
                        <td class="table__td table__td-total_mobile">
                            {{ amount * price }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Table',
    props: {
        data: {
            type: Array,
            default: () => ([])
        },
        title: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="sass">
.table
    align-items: center
    display: flex
    flex-direction: column
    max-height: 100%
    &__title
        font-size: 24px
        margin-bottom: 10px
        text-align: center
    &__wrap
        overflow: hidden
        -webkit-overflow-scrolling: touch
        &:hover
            overflow-y: auto
            margin-right: -15px
    &__content
        border-collapse: collapse
    &__th
        background-color: #ccc
        box-shadow: inset 1px 1px #000, 0 1px #000
        padding: 5px 3px
        position: sticky
        top: 0
    &__td
        border: 1px solid #000
        padding: 3px

@media screen and (max-device-width: 760px)
    .table
        height: 500px
        &__wrap:hover
            margin-right: 0
        &__th-total_mobile
            display: none
        &__td-total_mobile
            display: none
</style>
