<template>
    <div>
        <form>
            <div>
                <label>First Name</label>
                <input type="text" v-model="first_name"/>
            </div>
            <div>
                <label>Gender</label>
                <input type="radio" value="male" v-model="gender">Male
                <input type="radio" value="female" v-model="gender">Female
            </div>
            <div>
                <label>Interests</label>
                <input type="checkbox" value="reading" v-model="interests"><label>Reading</label>
                <input type="checkbox" value="sleeping" v-model="interests"><label>Sleeping</label>
                <input type="checkbox" value="music" v-model="interests"><label>Music</label>
                <input type="checkbox" value="tv" v-model="interests"><label>Watch TV</label>
            </div>
            <div>
                <label>How did you hear about us</label>
                <select v-model="hearAbout">
                    <option value="friends">From friends</option>
                    <option value="facebook">From facebook</option>
                    <option value="email">From email</option>
                </select>
            </div>
        </form>
        <div>
            <h1>Your details</h1>
            <ul>
                <li>First Name: {{first_name}}</li>
                <li>Gender: {{gender}}</li>
                <li>Interests: {{interests}}</li>
                <li>Hear About: {{hearAbout}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            'first_name': "",
            'gender': "",
            'interests': [],
            'hearAbout': ""
        }
    }
}
</script>