# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

<script setup lang="ts">
import { ref } from 'vue'
import dome from "../components/dome.vue"

const count = ref<string>(0);

const handleAdd = () =>{
  count.value+=1;
};
</script>

## Markdown Content

The count is: {{ count }}

<dome />
<el-button type="primary" @click="handleAdd">按钮</el-button>

<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

````
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
