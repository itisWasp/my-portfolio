class Footer extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML=`
        <style>
        .topnav {
          overflow: hidden;
          background-color: #264653;
          filter: drop-shadow(0px 1.5px 2px #000000c5);
        }
      
      .topnav a {
          float: left;
          color: white;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
          font-size: 17px;
          
      }
      
      .topnav a.blog {
          float: right;
          margin-left: 20px;
          color: black;
      }
      
      .button {
          float: right;
          border: none;
          color: white;
          padding: 5px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 10px 10px;
          cursor: pointer;
      }
        
      .button2 {
          border-radius: 50px; 
          color: white;
          background-color: #24A0ED;
          font-weight: bold;
          box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
      }
      
      .img1{
          float: right;
          
      }
      
      *{
          box-sizing: border-box;
        }
        
        /* Add a gray background color with some padding */
        body {
          font-family: 'Roboto';
          padding: 20px;
          background: #FFFFFF;
        }
        
        /* Header/Blog Title */
        .header {
          padding: 30px;
          font-size: 40px;
          text-align: center;
          background: #264653;
        }
        
        /* Create two unequal columns that floats next to each other */
        /* Left column */
        .leftcolumn {   
          float: left;
          width: 75%;
        }
        
        /* Right column */
        .rightcolumn {
          float: left;
          width: 25%;
          padding-left: 20px;
        }
        
        /* Fake image */
        .fakeimg {
          background-color: #dde9f0;
          width: 100%;
          padding: 20px;
        }
        
        /* Add a card effect for articles */
        .card {
           background-color: #f0f8ff;
           padding: 20px;
           margin-top: 20px;
           color: black;
        }
        
        /* Clear floats after the columns */
        .row:after {
          content: "";
          display: table;
          clear: both;
        }
        
        /* Footer */
        .footer {
          padding: 20px;
          text-align: center;
          background: #264653;
          margin-top: 20px;
          color: #ffffff;
          
        }
      /*Subscribe Follow Me Area*/
      .form {
        position: relative;
        z-index: 1;
        background: #FFFFFF;
        border-radius: 20px;
        max-width: 100%;/*360px*/
        padding: 45px;
        text-align: center;
      }
      
      .form input {
        outline: 0;
        background: #ddd;
        width: 100%;
        border: 0;
        border-radius: 50px;
        margin: 0 -40px 20px;
        padding: 10px;
        box-sizing: border-box;
        font-size: 14px;
        font-family: 'Abel';
      }
      
      .form input:focus {
        background: #dbdbdb;
      }
      
      .form button {
        font-family: 'Abel';
        outline: 0;
        background: #24A0ED;
        width: 70%;
        border: 0;
        border-radius: 50px;
        padding: 10px;
        color: #FFFFFF;
        font-size: 16px;
        -webkit-transition: all 0.3 ease;
        transition: all 0.3 ease;
        cursor: pointer;
      }
      
      .form button:active {
        background: #395591;
      }
      
      .form span {
        font-size: 75px;
        color: #4b6cb7;
      }
        
        /* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
        @media screen and (max-width: 800px) {
          .leftcolumn, .rightcolumn {   
            width: 100%;
            padding: 0;
          }
        }
      
      
        </style>

        <div class="footer">
        <h2>?? Copyright 2021 Mugisha Muhigirwa Israel. All rights reserved.</h2>
        </div>
        `;
    }
}
customElements.define('the-end', Footer);