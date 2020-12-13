<template>
    <div>
            <label>Room Type</label>:
            <span v-for='(room, key) in rooms' :key='key'>
                <input type="radio"  :value='key'>
                <label>{{room}}</label>
            </span>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      countries: {
        sg: "Singapore",
        ma: "Malaysia",
        in: "Indoensia",
        th: "Thailand",
        vt: "Vietnam",
      },
      activities: {
        "cycling":"Cycling",
        "hiking":"Nature Hikes",
        "sightseeing":"Sight Seeing",
        "shopping":"Shopping",
        "scuba-diving":"Scuba Diving",
      },
      rooms: {0:"single", 1:"super-single", 2:"double", 3:"bunk"},
    };
  },
};
</script>

<style scoped>
</style>