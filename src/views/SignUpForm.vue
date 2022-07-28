<template>
  <div class="signupforms">
        <div class="row container contents">
            <div class="col-md-6">
                <h3 class="mb-3 signin-text"> Sign Up</h3>
                <form action="" @submit.prevent="">
                    <div class="form-group mt-3">
                        <label for="text">Username</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="form-group mt-3">
                        <label for="email">Email</label>
                        <input type="email" class="form-control">
                    </div>
                    <div class="form-group mt-3">
                        <label for="password">Password</label>
                        <input type="password" class="form-control">
                    </div>
                    <button class="btn btn-class mt-3">Login</button>
                </form>
            </div>
            <div class="col-md-6 mt-3">
                <img src="../assets/img/signup.svg" class="img-fluid signupimgs" alt="">
            </div>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.signupforms{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #5995fd;
}
.signupimgs{
    height: 370px;
}
.contents{
    margin:8%;
    background-color: #fff;
    padding:4rem 1rem 4rem 1rem;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, .05);
    border-radius: 30px;
}
.signing-text{
    font-style: normal;
    font-weight: 600 !important;
}
.form-control{
    display: block;
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    border-color:#5995fd !important;
    border-style: solid !important;
    border-width: 0 0 1px 0 !important;
    padding: 0px !important;
    color:#495057;
    height: auto;
    border-radius: 0;
    background-color: #fff;
    background-clip:padding-box;
}
.form-control:focus{
    color:#495057;
    background-color:#fff;
    border-color: #fff;
    outline: 0;
    box-shadow: none;
}
.form-group{
    transition: all .3s;
    position: relative;
}
.form-group::after{
    content: '';
    width: 2px;
    height: 60%;
    position: absolute;
    bottom: 0;
    right: 0;
    background: #5995fd;
    opacity: 0;
}
.form-group:hover::after, .form-group:focus::after{
    opacity: 1;
}
.btn-class{
    border-color:#5995fd;
    color:#5995fd;
    background:transparent;
}

.btn-class:hover{
    background-color: #5995fd;
    color:#fff;
}
</style>