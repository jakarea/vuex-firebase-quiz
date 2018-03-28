<template lang="html">
  <div id="quize">
    <div class="col-md-6 col-sm-6 col-xs-6">
      <div class="question-body" v-for="question in questions">
            <div class="question-title">{{ question.question }}</div>
            <div class="form-check">
                <label class="form-check-label" for="optionA">
                {{ question.optionA }}
                </label>
            </div>

            <div class="form-check">
               
                <label class="form-check-label" for="optionB">
                {{ question.optionB }}
                </label>
            </div>
            <div class="form-check">
                
                <label class="form-check-label" for="optionC">
                {{ question.optionC }}
                </label>
            </div>
            <div class="form-check">
                
                <label class="form-check-label" for="optionD">
                {{ question.optionD }}
                </label>
            </div>
            <div class="about-actions quiz-btn">
                Correct Ans:  {{ question.optionD }}
            </div>
      </div>
    </div>      
  </div>
</template>
<script type="text/javascript">
  import { db } from '../main'
  export default {
    name:'Questions',
      data () {
        return {
            questions:[]
        }
      },
    firestore () {
      return {
        questions: db.collection('questions').orderBy('question')
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
