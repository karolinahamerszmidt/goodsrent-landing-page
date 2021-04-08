import './App.css';
import worek from './Worek.png';
import logo from './logo.png';
import girl from './girl.png';
import telefon from './telefon.png';
import biuro from './biuro.jpg';
import ubrania from './ubrania.jpg';

const szaryKolor = '#f8f6f6';
const niebieskiKolor = '#13538a';

function App() {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#5CDB95',
          width: '100%',
          height: '50vh',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              padding: '10px',
            }}
          >
            <img
              style={{
                width: '50px',
                height: '50px',
              }}
              src={logo}
            />
          </div>
          <div
            style={{
              padding: '10px',
              color: 'white',
              display: 'flex',
            }}
          >
            Log In/Sign In{' '}
            <div
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: 'white',
                borderRadius: '50%',
                marginLeft: '5px',
              }}
            ></div>
          </div>
        </div>
        <div
          style={{
            textAlign: 'center',
            color: 'white',
            fontSize: '38px',
            fontWeight: 'bold',
          }}
        >
          Be Smart
        </div>
        <div
          style={{
            textAlign: 'center',
            color: 'white',
            fontSize: '22px',
          }}
        >
          Discover & rent in your area
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: szaryKolor,
              padding: '10px 100px',
              margin: '1px',
              borderRadius: '4px 0px 0px 4px',
              color: '#737373',
            }}
          >
            Rent
          </div>
          <div
            style={{
              backgroundColor: szaryKolor,
              padding: '10px 100px',
              margin: '1px',
              borderRadius: '0px 4px 4px 0px',
              color: '#737373',
            }}
          >
            Where?
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            paddingLeft: '40px',
            width: '100%',
            maxWidth: '1000px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <div
            style={{
              color: 'white',
              fontWeight: 'bold',
              marginTop: 'auto',
              padding: '10px',
            }}
          >
            Home/Garden
          </div>
          <div
            style={{
              color: 'white',
              fontWeight: 'bold',
              marginTop: 'auto',
              padding: '10px',
            }}
          >
            Electronics
          </div>
          <div
            style={{
              color: 'white',
              fontWeight: 'bold',
              marginTop: 'auto',
              padding: '10px',
            }}
          >
            Transports
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: 'url(' + ubrania + ')',
        }}
        className="ubrania"
      >
        {' '}
        <div className="ubraniaKwadrat"></div>
        <div className="ubraniaTekst">
          <div className="ubraniaTekstInside">
            <div className="paragraf">
              The average American throws away 65 pounds of clothing per year
              (Huffington Post)
            </div>
            <div className="paragraf">
              British research found that the average 10-year-old owns 238 toys
              but plays with just 12 daily (The Telegraph)
            </div>
          </div>
        </div>
      </div>
      <div className="tytul">How much could you save?</div>
      <div
        style={{
          backgroundImage: 'url(' + biuro + ')',
        }}
        className="biuro"
      >
        <div className="biuroInside">
          <div className="przycisk">Download our App!</div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: niebieskiKolor,
          height: '130px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <div
          style={{
            color: 'white',
          }}
        >
          Contact
        </div>
        <div
          style={{
            color: 'white',
          }}
        >
          About us
        </div>
        <div
          style={{
            color: 'white',
          }}
        >
          Privacy Policy
        </div>
        <div
          style={{
            color: 'white',
          }}
        >
          Terms of Service
        </div>
      </div>
    </div>
  );
}

export default App;
