<template>
    <div>
        <h1>My first Vue application</h1>
        <p>Hello {{firstName}} {{lastName}}</p>
    </div>
</template>

<script>
export default {
    name: "TemplateDemo",
    data: function() {
        return {
            firstName: "Tan",
            lastName: "Ah Kow"
        }
    }
}
</script>