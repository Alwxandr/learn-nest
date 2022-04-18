import {NestFactory} from "@nestjs/core"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";
async function start(){
    const PORT = process.env.PORT || 5000;
    console.log(process.env.PORT, "PORT")
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
        .setTitle('Lesson by Nest')
        .setDescription('Rest Api dockumentation')
        .setVersion('1.0.0.')
        .addTag('Alexandr Tarakanov')
        .build()
    const document = SwaggerModule.createDocument(app, config); 
    SwaggerModule.setup('/api/docs', app, document)   
    await app.listen(PORT, ()=> {
        console.log(` SERVER START PORT =  ${PORT}`)
    })
}

start()