exports.LoginPage = class LoginPage{
     
    constructor(page){
        //da bi moglo da se pristupi lokatorima mora da se koristi page ali on mora da se nekako prosledi
        //to se radi kroz konstruktor da bi moglo svuda da se koristi taj page
        //promenljivoj page u konstruktoru prosledjuje se ono sto ulazi u konstruktor kao ulazni parametar
        //kopira samo lokatore ne i akcije (a to znaci ono .click())
        
        this.page = page;
        this.username_textBox = page.getByLabel('Username');
        this.password_textBox = page.getByLabel('Password');
        this.login_button = page.getByRole('button', { name: ' Login' });
    }
    // moze da se definise atomska f-ja (jedna funkcionalnost u jednoj metodi)
    // enterUsername(){
    // }
    // enterPassword(){
    // }
    // clickOnLogin(){
    // }

    //definise akciju odlaska na odredjenu adresu
    // https://the-internet.herokuapp.com/login
    async gotoLoginPage(){
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    //definise jednu f-ju za logovanje koja ce sadrazati vise akcija za popunjavanje username, password-a i klika na dugme
    async login(username, password){
        await this.username_textBox.fill(username);
        await this.password_textBox.fill(password);
        await this.login_button.click();
    }
}