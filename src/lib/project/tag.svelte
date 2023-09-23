<script>
    export let technology = 'Technology';
</script>

<div>
    {technology.toUpperCase()}
</div>

<style lang="less">
    @height: 30px;

    div {
        min-width: 100px;
        height: @height;
        border-radius: 1em;
        background-color: lightgray;
        text-align: center;
        line-height: @height;
        padding: 0.1em 0.5em;
    }
</style>