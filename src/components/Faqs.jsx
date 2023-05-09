import{useState} from 'react';

const questions = [
    {
        question:"How do i make paymenst?",
        answer:"When you register with rhonpesa you are provided with a unique merchant Id and you customers will us ussd *640*merchant_id*amount#. Fast and seamless."
    },
    {
        question:"How do I add bills?",
        answer:"Login to your account and add bills like insurance, stock purchasing, loans. A small percentage will be auto-deducted per transaction to pay for your monthly bills."
    },
    {
        question:"How can I grow my Wallet?",
        answer:"As your customers pay you, you wallet grows. You cam also deposit from mpesa or bank directlty."
    },
    {
        question:"Why should I use Rhonpesa?",
        answer:"Rhonpesa is the fastest and most complete payment solution. Ypu can accept payment, manage your bills, boost your credit score and do shopping all in one payment gateway."
    },
    {
        question:"Can I use money in rhonpesa for Shopping?",
        answer:"Yes it is possible, seamless and free. Our technology allows our customers to spend money directly in rhonpesa wallet to do shopping."
    },
    {
        question:"Can I transfer money in Rhonpesa?",
        answer:"Money in rhonpesa wallet can be transferred to bank account, to other line or you can widthraw."
    }
]
function Faqs(){

    const[accordion, setAccordion] = useState(-1);
    const handleClick=(index)=>{
        if(accordion===index){
            setAccordion(-1)
            return
        }
        setAccordion(index);
        console.log("index: ", index);
        return
    }

    return(
        <>
            <div className="sm:w-full md:w-8/12 bg-slate-100 m-auto p-4">
                <div className="text-3xl py-4 w-full bg-white rounded-lg text-violet-500 text-center">
                    <h1>Faqs</h1>
                </div>
                <div className="bg-slate-200">
                    {
                      questions.map((item, index)=>{
                          return(
                              <div className="bg-white py-4 my-4 rounded-lg" key={index}>
                                  <button className="flex justify-between text-xl py-4 px-4 w-full hover:bg-stone-50" onClick={()=>handleClick(index)}>
                                      {item.question} 
                                      <h3>
                                          {
                                              (accordion===index)?
                                              <span>-</span>:
                                              <span>+</span>
                                          }   
                                      </h3>
                                  </button>
                                  <div className={`py-4 px-4 ${(accordion===index)?"block":"hidden"}`}>
                                    {item.answer}                                            
                                  </div>                                 
                              </div>
                          )
                      })
                    }
                </div>
                
            </div>
        </>
    )
}
export default Faqs;