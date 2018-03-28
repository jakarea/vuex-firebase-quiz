<template>
	<div class="progress-bar progress-bar-striped bg-success"
    	role="progressbar" :style="{ width: time * 10 + '%'}"
    	aria-valuemin="0" aria-valuemax="100">
	</div>
</template>

<script type="text/javascript">
	export default {
    	name:'Timebar',
    	data() {
    		return {
    			time: 5
    		}
    	},
        methods: {
                timeBar() {
                    const _this=this
                    this.time--
                    if(this.time == 0){
                        _this.time = 10
                        _this.goNext()
                    }
                    setTimeout(function(){ _this.timeBar() }, 1000);
                },
            }
        }

</script>
