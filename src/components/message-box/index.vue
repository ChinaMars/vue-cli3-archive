<template>
	<transition name="message-box-fade">
		<div class="message-box" v-if="isShowMessageBox">
			{{title}}
				message-box
				<button @click="handleAction('confirm')">确认</button>
				<button @click="handleAction('cancel')">取消</button>
		</div>
	</transition>
</template>

<script>
export default {
	data() {
		return {
			isShowMessageBox: false,
			title: '',
			message: '',
			beforeClose: null
		}
	},
	mounted() {

	},
	methods: {
		doclose() {
			this.isShowMessageBox = false
		},
		handleAction(action) {
			if(typeof this.beforeClose === 'function') {
				this.beforeClose(action,this,this.doclose)
			}else{
				this.isShowMessageBox = false;
				this.callback(action);
			}
		}
	}
}
</script>

<style lang="less">
	.message-box{
		position: fixed;
		top: 50%;
	}
.message-box-fade-enter-active {
  animation: message-box-fade-in .3s;
}

.message-box-fade-leave-active {
  animation: message-box-fade-out .3s;
}

@keyframes message-box-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes message-box-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
</style>