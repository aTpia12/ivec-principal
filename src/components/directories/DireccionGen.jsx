import { directorio1, directorio2, directorio3, directorio4, directorio5, directorio6, directorio7 } from "../../helpers/dataDirectorio"
import Card from "./Card"

const DireccionGen = ({ indice }) => {

  return (
    <>                  
      <div style={{display: indice === 1 ? 'block' : 'none'}}>
                <figure className="w-full bg-slate-800" >
                    <img className="h-auto max-w-full rounded-lg" src={directorio1.length !== 0 && directorio1[0]?.img } alt="image description" />
                    <figcaption className="mt-2 text-xl text-center text-white">{directorio1.length !== 0 && directorio1[0]?.name }</figcaption>
                    <figcaption className="mt-2 text-sm text-center text-white">{directorio1.length !== 0 && directorio1[0]?.des }</figcaption>
                </figure>



                <div className="py-10 grid grid-cols-3">

                    {

                        directorio1.map((card, index) => (
                            index > 0 &&
                            <Card key={card.id} datos={card}/>
                        )) 
                    }

                </div>
      </div>

      <div style={{display: indice === 2 ? 'block' : 'none'}}>
                <figure className="w-full bg-slate-800">
                    <img className="h-auto max-w-full rounded-lg" src={directorio2.length !== 0 && directorio2[0]?.img } alt="image description" />
                    <figcaption className="mt-2 text-xl text-center text-white">{directorio2.length !== 0 && directorio2[0]?.name }</figcaption>
                    <figcaption className="mt-2 text-sm text-center text-white">{directorio2.length !== 0 && directorio2[0]?.des }</figcaption>
                </figure>



                <div className="py-10 grid grid-cols-3">

                    {
                        directorio2.map((card, index) => (
                            index > 0 &&
                            <Card key={card.id} datos={card}/>
                        )) 
                    }

                </div>
      </div>

      <div style={{display: indice === 3 ? 'block' : 'none'}}>
                <figure className="w-full bg-slate-800">
                    <img className="h-auto max-w-full rounded-lg" src={directorio3.length !== 0 && directorio3[0]?.img } alt="image description" />
                    <figcaption className="mt-2 text-xl text-center text-white">{directorio3.length !== 0 && directorio3[0]?.name }</figcaption>
                    <figcaption className="mt-2 text-sm text-center text-white">{directorio3.length !== 0 && directorio3[0]?.des }</figcaption>
                </figure>



                <div className="py-10 grid grid-cols-3">

                    {
                        directorio3.map((card, index) => (
                            index > 0 &&
                            <Card key={card.id} datos={card}/>
                        )) 
                    }

                </div>
      </div>

      <div style={{display: indice === 4 ? 'block' : 'none'}}>
                <figure className="w-full bg-slate-800">
                    <img className="h-auto max-w-full rounded-lg" src={directorio4.length !== 0 && directorio4[0]?.img } alt="image description" />
                    <figcaption className="mt-2 text-xl text-center text-white">{directorio4.length !== 0 && directorio4[0]?.name }</figcaption>
                    <figcaption className="mt-2 text-sm text-center text-white">{directorio4.length !== 0 && directorio4[0]?.des }</figcaption>
                </figure>



                <div className="py-10 grid grid-cols-3">

                    {
                        directorio4.map((card, index) => (
                            index > 0 &&
                            <Card key={card.id} datos={card}/>
                        )) 
                    }

                </div>
      </div>

      <div style={{display: indice === 5 ? 'block' : 'none'}}>
                <figure className="w-full bg-slate-800">
                    <img className="h-auto max-w-full rounded-lg" src={directorio5.length !== 0 && directorio5[0]?.img } alt="image description" />
                    <figcaption className="mt-2 text-xl text-center text-white">{directorio5.length !== 0 && directorio5[0]?.name }</figcaption>
                    <figcaption className="mt-2 text-sm text-center text-white">{directorio5.length !== 0 && directorio5[0]?.des }</figcaption>
                </figure>



                <div className="py-10 grid grid-cols-3">

                    {
                        directorio5.map((card, index) => (
                            index > 0 &&
                            <Card key={card.id} datos={card}/>
                        )) 
                    }

                </div>
      </div>

      <div style={{display: indice === 6 ? 'block' : 'none'}}>
                <figure className="w-full bg-slate-800">
                    <img className="h-auto max-w-full rounded-lg" src={directorio6.length !== 0 && directorio6[0]?.img } alt="image description" />
                    <figcaption className="mt-2 text-xl text-center text-white">{directorio6.length !== 0 && directorio6[0]?.name }</figcaption>
                    <figcaption className="mt-2 text-sm text-center text-white">{directorio6.length !== 0 && directorio6[0]?.des }</figcaption>
                </figure>



                <div className="py-10 grid grid-cols-3">

                    {
                        directorio6.map((card, index) => (
                            index > 0 &&
                            <Card key={card.id} datos={card}/>
                        )) 
                    }

                </div>
      </div>

      <div style={{display: indice === 7 ? 'block' : 'none'}}>

                <div className="py-10 grid grid-cols-3">

                    {
                        directorio7.map((card) => (
                            <Card key={card.id} datos={card}/>
                        )) 
                    }

                </div>
      </div>
    </>
  )
}

export default DireccionGen