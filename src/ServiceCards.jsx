export default function ServiceCard({ title, description, icon }) 
{
     return ( 
     <div className="bg-gray-900 rounded-xl p-6 shadow hover:shadow-lg transition"> 
        <div className="mb-4">{icon}</div>  
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
         <p className="text-gray-400 mb-4">{description}</p> 
         <button className="text-purple-400 hover:underline font-medium"> Enroll now → </button>
     </div> );
      }