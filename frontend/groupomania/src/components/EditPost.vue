<template>
  
<div class=" grp-editpost__body">
    <div class="container">
      <div class="wrapper">
        <section class="post">
          <header>Publier un post</header>
          <form action="#">
            <textarea placeholder="Exprimez-vous" spellcheck="false" required></textarea>
                <div class="option">
              <p>Ajouter une image.Formats acceptés: Jpeg, Jpg, Png, max 50 mo.</p>
                </div>
                <button>Publier</button>
          </form>
        </section>
      </div>
    </div>
</div>

</template>

<script>

export default {
    name: 'Header',
    data() {
        return {
            text: "Mon beau site"
        };
    }
};
</script>


<style lang="scss">
.grp-editpost__body{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: red;
}
.container{
  width: 500px;
  height: 480px;
  overflow: hidden;
  background: #fff;
  border-radius: 10px;
}
.post{
  width: 500px;
  background: #fff;
}

.container.active .post{
  margin-left: -500px;
}
.post header{
  font-size: 22px;
  font-weight: 600;
  padding: 17px 0;
  text-align: center;
  border-bottom: 1px solid #bfbfbf;
}
.post form{
  margin: 20px 25px;
}


.post form .content .details{
  margin: -3px 0 0 12px;
}
form .content .details p{
  font-size: 17px;
  font-weight: 500;
}

form :where(textarea, button){
  width: 100%;
  outline: none;
  border: none;
}
form textarea{
  resize: none;
  font-size: 18px;
  margin-top: 30px;
  min-height: 100px;
}
form textarea::placeholder{
  color: #858585;
}
form textarea:focus::placeholder{
  color: #b3b3b3;
}
form .option{
  height: 57px;
  margin: 15px 0;
  padding: 0 15px;
  border-radius: 7px;
  border: 1px solid #B9B9B9;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
form .options :where(.list, li),
.audience :where(.arrow-back, .icon, li .radio){
  display: flex;
  align-items: center;
  justify-content: center;
}
form .option p{
  color: #595959;
  font-size: 15px;
  font-weight: 500;
  cursor: default;
}

.option {
  height: 42px;
  width: 42px;
  margin: 0 -1px;
  cursor: pointer;
  border-radius: 50%;
}
.option {
  background: #f0f1f4;
}
.options .list li img{
  width: 23px;
}
button{
  height: 53px;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  color: #BCC0C4;
  cursor: no-drop;
  border-radius: 7px;
  background: #e2e5e9;
  transition: all 0.3s ease;
}
form textarea:valid ~ button{
  color: #fff;
  cursor: pointer;
  background: #4267B2;
}
form textarea:valid ~ button:hover{
  background: #4267B2;
}

</style>
