const app = new Vue({
     el:'#root',
     data:{
        emailArr: [],
     },

     methods:{
        generateEmail(){
            for(let i=0; i<10;i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((resp) => {
                this.emailArr.push(resp.data.response)
            })
        }
        }
     }
})