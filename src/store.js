export default {
  name : "shreedhar"
}


auth.signInWithEmailAndPassword(this.form.email, this.form.password)
      .then(data => {
        this.$store.commit('setUid',data.user.uid)
          
        const userDoc = db.collection('users').doc(`${this.$store.state.uid}`)
          userDoc.get()
          .then((doc)=>{
          this.form = doc.data();
          this.$store.commit('setForm',this.form)
          this.$router.push('/user/user');
          })
          .catch(err => {
          this.error = err.message;
          })
      })
      
      
      
      
      
      signOut() {
        auth
        .signOut()
        .then(() => {
         // this.$router.push('/chat');
        });
    }