export default function StatCard({

title,
value,
color

}){

return(

<div className={`

bg-gradient-to-br
${color}

text-white
rounded-[30px]
p-6 md:p-8
shadow-xl

hover:-translate-y-2
hover:shadow-2xl

transition-all
duration-300

`}>

<h3 className="text-lg opacity-80">

{title}

</h3>

<h1 className="text-4xl md:text-5xl font-black mt-5">

{value}

</h1>

</div>

)

}