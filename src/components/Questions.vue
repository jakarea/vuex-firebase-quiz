<template>
	<div>
	    <div class="question-title">{{ questions[randIndx].question }}</div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="ans" v-model="selected" id="optionA" value="A">
            <label class="form-check-label" for="optionA">
            {{ questions[randIndx].optionA }}
            </label>
        </div>

	    <div class="form-check">
            <input class="form-check-input" type="radio" name="ans" v-model="selected" id="optionB" value="B">
            <label class="form-check-label" for="optionB">
            {{ questions[randIndx].optionB }}
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="ans" v-model="selected" id="optionC" value="C">
            <label class="form-check-label" for="optionC">
            {{ questions[randIndx].optionC }}
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="ans" v-model="selected" id="optionD" value="D">
            <label class="form-check-label" for="optionD">
            {{ questions[randIndx].optionD }}
            </label>
        </div>
	    <div class="about-actions quiz-btn">
	        <button class="m-btn btn-xs pull-right"  @click="goNext">Next</button>
	    </div>
	</div>
</template>

<script type="text/javascript">
	import { db } from '../main'
    import firebase from 'firebase';
	export default {
		name: 'Questions',
		data(){
			return {
				selected : '',
				questions: [],
				randIndx:''
			}
		},
		created(){
        	db.collection('questions')
          		.get()
          		.then(querySnapshot => {
              		querySnapshot.forEach(doc=>{
                  		const data = {
		                    'id' : doc.id,
		                    'question' : doc.data().question,
		                    'optionA' : doc.data().optionA,
		                    'optionB' : doc.data().optionB,
		                    'optionC' : doc.data().optionC,
		                    'optionD' : doc.data().optionD,
		                    'ans' : doc.data().ans,
	                  	}
                  		this.questions.push(data)
              		});
            	this.randIndx = Math.floor(Math.random() * this.questions.length)
          	})
          	.catch(function(error) {
              console.log("Error getting documents: ", error);
          	});

        	const _this=this
				_this.timeBar()
				setTimeout(function(){ _this.goNext() }, 1000);
		},

		methods: {
			goNext(){
          		this.questions = $.grep(this.questions, (question, index) => {
    				if(this.questions.length == 1){
    					this.$router.push('/score')
    				}
		            return question.id != this.questions[this.randIndx].id
		        });
          		this.randIndx = Math.floor(Math.random() * this.questions.length)
        	},
		}
	}
</script>

<style type="text/css" scoped>
	 .question-title {
    	font-size: 22px;
    	margin-bottom: 10px;
    }
</style>