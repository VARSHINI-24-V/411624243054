import Card from "../organisms/card";
export default function Buleprint(props){
    return(
        <div>
            <h1><header>
                Hi,{props.name}
            </header></h1>
            <Card />
            <Card />
            <Card />
            <Card />

        </div>
    );
}

