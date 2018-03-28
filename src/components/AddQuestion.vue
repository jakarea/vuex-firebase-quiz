<template lang="html">
  <div id="quize">
    <div class="col-md-6 col-sm-6 col-xs-6">
      <form role="form" @submit.prevent="addQuestion(question.question,
          question.optionA,
          question.optionB,
          question.optionC,
          question.optionD,
          question.ans)">
          <div class="form-group float-label-control">
              <label for="">Enter Question</label>
              <input type="text" class="form-control" v-model="question.question" placeholder="What is your question?">
          </div>

          <div class="form-group float-label-control">
              <label class="mr-sm-2" for="optionA">Option A</label>
              <input type="text" class="form-control" v-model="question.optionA"
            placeholder="Enter A Option">
          </div>

          <div class="form-group float-label-control">
              <label class="mr-sm-2" for="optionB">Option B</label>
              <input type="text" class="form-control" v-model="question.optionB"
            placeholder="Enter B Option">
          </div>

          <div class="form-group float-label-control">
              <label class="mr-sm-2" for="optionC">Option C</label>
              <input type="text" class="form-control" v-model="question.optionC"
            placeholder="Enter C Option">
          </div>
          <div class="form-group float-label-control">
              <label class="mr-sm-2" for="optionD">Option D</label>
              <input type="text" class="form-control" v-model="question.optionD"
            placeholder="Enter D Option">
          </div>

          <label class="mr-sm-2" for="optionD">Correct Answer <code>{{ question.ans }}</code></label>
          <div class="input-group">
            <input type="radio" class="form-control" name="option" v-model="question.ans" value="A">
            {{question.optionA}}
          </div>
          <div class="input-group">
            <input type="radio" class="form-control" name="option" v-model="question.ans" value="B">
            {{ question.optionB }}
          </div>
          <div class="input-group">
            <input type="radio" class="form-control" name="option" v-model="question.ans" value="C">
            {{ question.optionC }}
          </div>
          <div class="input-group">
            <input type="radio" class="form-control" name="option" v-model="question.ans" value="D">
            {{ question.optionD }}
          </div>
          <button type="submit" class="btn btn-primary pull-right">Add</button>
      </form>
    </div>      
  </div>
</template>
<script type="text/javascript">
  import { db } from '../main'
  import firebase from 'firebase';
  export default{
    name: 'AddQuiz',
      data(){
        return{
          question:{}
        }
      },
      methods: { 
      addQuestion (question,optionA,optionB,optionC,optionD,ans)  {  
          db.collection('questions').add({question,optionA,optionB,optionC,optionD,ans})
          .then(function() {
              this.question = ''
              console.log("Document successfully written!");
          })
          .catch(function(error) {
              console.error("Error writing document: ", error);
          });
        }
      }
  }
</script>
<style lang="css" scoped>
    .progress .bg-success {
      background-color: #e74430!important;
    }
    .question-body {
      margin-top: 40px;
    }
   
    .progress {
      background-color: #e9ecef;
    }
    .about-actions.quiz-btn button {
      width: 115px;
      margin-right: 20px;
      margin-top: 40px;
    }

    #quize{
      min-height: 300px;
      margin-top: 100px;
    }
</style>
