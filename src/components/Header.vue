<template>
  <div class="header">
    <ul class="header__nav">
        <li class="header__nav-item">
            <router-link
                to="/"
                exact
                class="header__nav-link"
            >
                List
            </router-link>
        </li>
        <li class="header__nav-item">
            <router-link
                to="/dropdown"
                class="header__nav-link"
            >
                Dropdown
            </router-link>
        </li>
    </ul>
</div>
</template>

<style lang="sass">
.header
    padding: 15px 0
    &__nav
        display: flex
        list-style: none
        &-item
            &:not(:last-child)
                margin-right: 15px
        &-link
            color: #000
            font-family: Arial, sans-serif
            font-size: 18px
            padding: 5px 8px
            transition: all .4s
            text-decoration: none
            &:hover,
            &.active
                background-color: lightcoral
                color: #fff
</style>