<template>
  <h1>Signup Form</h1>

  <form @submit="formSubmission">
    <div>
      <label>Name</label>
      <input type="text" v-model="name">
    </div>
    <div>
      <label>Email</label>
      <input type="email" v-model="email">
    </div>
    <div>
      <label>Password</label>
      <input type="password" v-model="password">
    </div>
    <div>
      <label>Agree terms & condition</label>
      <input type="checkbox" v-model="termsAndCondition">
    </div>
    <div>
      <label>OOP</label>
      <input type="checkbox" value="OOP" v-model="courses">
    </div>
    <div>
      <label>C++</label>
      <input type="checkbox" value="C++" v-model="courses">
    </div>
    <div>
      <label>DSA</label>
      <input type="checkbox" value="DSA" v-model="courses">
    </div>
    <div>
      <label>Are you married</label>
      <input type="radio" value="Yes" name="status" v-model="status">
      <input type="radio" value="No" name="status" v-model="status">
    </div>

    <div>
      <label>Select gender</label>
      <select v-model="gender">
        <option value="Male">Male</option>
        <option value="Fe Male">Fe Male</option>
        <option value="Not mentioned">Not mentioned</option>
      </select>
    </div>

    <div>
      <label>Insert Hobby</label>
      <input type="text" v-model="tempHobby" @keyup="addToHobby"/>
    </div>

    <button type="submit">Save form</button>
  </form>

  <hr/>
  <div>
    <p>Name: {{ name }}</p>
    <p>Email: {{ email }}</p>
    <p>Password: {{ password }}</p>
    <p>Terms And Condition: {{ termsAndCondition ? "Accepted" : "Not Accepted" }}</p>
    <p>Course: {{ courses }}</p>
    <p>Gender: {{ gender }}</p>
    <p>Are you married: {{ status }}</p>
    <p>
      Hobby listing

    </p>
    <ul>
      <li v-for="hobby in hobbiesList" v-bind:key="hobby" @click="()=>removeFromHobby(hobby)">
        {{ hobby }}
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: "FormHandling",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      termsAndCondition: false,
      courses: [],
      gender: "",
      tempHobby: "",
      hobbiesList: [],
      status: ""
    }
  },
  methods:{
    addToHobby(e){
      if(e.key === "," || e.key === "Enter"){
        if(!this.hobbiesList.includes(this.tempHobby) && this.tempHobby !== ",") {
          this.hobbiesList.push(this.tempHobby)
        }
        this.tempHobby=""
      }
    },
    removeFromHobby(currentHobby){
      this.hobbiesList = this.hobbiesList.filter((hobby)=>{
        return hobby !== currentHobby
      })
    },
    formSubmission(e){
      e.preventDefault()
      alert("Form Submiited")
    }
  }
}
</script>

<style scoped>

</style>