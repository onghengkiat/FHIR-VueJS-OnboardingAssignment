<script>
export default {
    props: {
        name: { 
            type: String,
            required: true,
            default: "Default Patient Name",
        },
        birthdate: String,
        gender: String,
        address: String,
    }
}
</script>

<template>
    <div class="card">
        <div class="card_name_field">
            Name: {{name}}
        </div> 
        <div v-if="gender" class="card_gender_field">
            Gender: {{gender}}
        </div> 
        <div v-if="birthdate" class="card_birthdate_field">
            Birthdate: {{birthdate}}
        </div> 
        <div v-if="address" class="card_address_field">
            Address: {{address}}
        </div> 
    </div>
</template>

<style>
.card {
    background-color: white;
    cursor: pointer;
    width: 220px;
    height: 100px;
    margin: 20px;
    padding: 20px;
}
</style>