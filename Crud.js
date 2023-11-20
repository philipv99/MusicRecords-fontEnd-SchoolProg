Vue.createApp({
   data(){
      return{
         showAddForm: false,
         addData: { 
            title: "", 
            artist: "", 
            publicationYear:0,
            Duration:0,
            id:0
         },
         addMeassge: ""
      };
   },
   methods: {
      async addRecord(){
         console.log(this.data)
         try{
            response = await axios.post(apiurl, this.addData)
            this.addMeassge = "response " + response.status + " " + response.statusText
            .getAll(apiurl)
            showAddForm = false
         }
         catch (ex) {
            alert(ex.message)
         };
      }
   }
}).mount("#grud")