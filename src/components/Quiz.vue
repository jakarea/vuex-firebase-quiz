<template lang="html">
    <div id="quize">
        <div class="col-md-8 col-sm-6 col-xs-6">
        	<div class="start" v-if="!start">
        		<h2>Welcome to mcq realtime quiz...</h2>
        		<h3>If You are ready to start exam, then hit start button</h3>
        		<div class="col-md-3 col-md-offset-4">
	        		<div class="quiz-btn start-btn">
				        <button class="m-btn btn-xs" @click="startQuiz">Start</button>
				    </div>
				</div>
        	</div>
        	{{ user }}
        	<div v-if="start" >
	            <div class="progress">
	                <div class="progress-bar progress-bar-striped bg-success"
                        role="progressbar" :style="{ width: time * 10 + '%'}"
                        aria-valuemin="0" aria-valuemax="100"> {{ time }}
                    </div>
	            </div>
	            <div class="question-body">
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
	        </div>
        </div>
        <div>
            <button @click="addParticipent">Add Perticipentss</button>
        </div> 
        <div class="col-md-4 col-sm-6 col-xs-6">
            <div class="leaderboard">
                <Leaders />
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import { mapState,mapActions } from 'vuex'
	import Timebar from './Timebar'
	import Leaders from './Leaders'
    import { db } from '../main'
    import firebase from 'firebase';

	export default{
		name: 'Quiz',
		components: {
	      Timebar,
	      Leaders,
	    },

	    data(){
	    	return{
	    		start:0,
                selected : '',
                questions: [],
                randIndx:'',
                time:12,
	    	}
	    },

        computed:{
        ...mapState({
            user : state => state.user
            }),
        },

        created(){
            const currentUser = firebase.auth().currentUser;
            console.log(currentUser.email)
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
            submitAnswer(ans,id){
                this.questions.filter(question => {
                    if(question.id == id){
                      if(question.ans == ans){
                        console.log(ans)
                        /*this.score +=1;
                        db.collection('participents')
                        .where('particiepent_id','==',this.particiepent_id)
                        .get()
                        .then(querySnapshot => {
                          querySnapshot.forEach(doc => {
                            doc.ref.update({
                              score : this.score,
                            })
                          })
                        })*/
                      }
                    }
                })
            },
            
            goNext(){
                if(this.selected != '' && this.questions!= '')
                    this.submitAnswer(this.selected,this.questions[this.randIndx].id)
                this.time = 10;
                this.selected = '';
                this.questions = $.grep(this.questions, (question, index) => {
                    if(this.questions.length == 1){
                        this.$router.push('/score')
                    }
                    return question.id != this.questions[this.randIndx].id
                });
                this.randIndx = Math.floor(Math.random() * this.questions.length)
            },

            timeBar() {
                const _this=this
                this.time--
                if(this.time == -1){
                    _this.time = 10
                    _this.goNext()
                }
                setTimeout(function(){ _this.timeBar() }, 1000);
            },

            startQuiz: function() {
                if(!this.user.email){
                   this.$router.push('/login')
                }
                
               // this.addParticipent()

               db.collection('participents').add({
                        participent_id : this.user.uid,
                        name: this.user.displayName,
                        photo: this.user.photo,
                        score: 0,
                    })

                this.start = 1
            },
            addParticipent: function(){

                db.collection("participents")
                    .get().then(function(querySnapshot) {
                        querySnapshot.forEach(function(doc){
                            if (doc.exists) {
                            console.log("Document data:", doc.data());
                            } else {
                                // doc.data() will be undefined in this case
                                console.log("No such document!");
                            }
                        })
                    }).catch(function(error) {
                        console.log("Error getting document:", error);
                    });


               
                // console.log('aaa')
                // db.collection('participents')
                //     .where('particiepent_id','==','j@p.com')
                //     .get()
                //     .then(querySnapshot => {
                //         querySnapshot.forEach(doc => {
                //         doc.ref.update({
                //             score : 10,
                //             })
                //         })
                //     })
                //     .catch( () => {
                //         console.log(ccc)
                //             db.collection('participents').add({
                //             participent_id : this.user.email,
                //             name: 'jakarea parvez',
                //             score: 0,
                //         })
                //     })
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
