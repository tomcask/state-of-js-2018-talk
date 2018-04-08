// Import React
import React from "react";

// Import Spectacle Core tags
import {
    BlockQuote,
    Cite,
    Deck,
    Heading,
    ListItem,
    List,
    Quote,
    Slide,
    Text, Link, Image, Layout, S
    , Appear, Table, TableRow, TableHeaderItem, TableItem, Markdown
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quarternary: "#CECECE"
}, {
    primary: "Montserrat",
    secondary: "Helvetica"
});

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
                <Slide transition={["zoom"]} textColor="primary" bgColor="secondary">
                    <BlockQuote>
                        <Quote>El estado del arte de Javascript</Quote>
                    </BlockQuote>

                    <Text
                        padding={"60"}
                        textSize={22}
                        textColor="primary"
                        textAlign={"left"}
                    >
                        Tomás Casquero <Link textColor="tertiary"
                                             href="http://twitter.com/mentoringjs">@mentoringjs</Link><br/><br/>
                        Arquitecto Javascript<br/><br/>
                        Mentor principal en <Link textColor="tertiary"
                                                  href="http://mentoringjs.com">Mentoringjs.com</Link></Text>
                </Slide>
                <Slide transition={["fade"]}
                       bgImage={"https://photos-5.dropbox.com/t/2/AAAVUjCErgiOdLgVd5srmaGPDuOr13foX6gBOwZdkNpJFg/12/252565/jpeg/32x32/3/1523138400/0/2/passion.jpg/EP-FMxjD3P2IAyAHKAc/VcKOMR2OMXXfaeHye0MYbeFr6BXgpZLGUrjeS0czkXA?dl=0&size=1600x1200&size_mode=3"}
                       textColor="primary" bgColor="secondary">
                </Slide>
                <Slide transition={["fade"]} bgColor="tertiary">
                    <BlockQuote>
                        <Quote textColor="secondary">Javascript is eating the world</Quote>
                    </BlockQuote>
                </Slide>
                <Slide transition={["fade"]} bgColor="tertiary">
                    <Heading size={4} textColor="primary" caps>JavaScript is used by 95.1% of all the
                        websites.</Heading>
                    <Image fill={true}
                           src={"https://photos-3.dropbox.com/t/2/AAAcGnGyQaUd64lJl7HrL1oqHXxJ_nyYhrLuX6-vzTdMZw/12/252565/png/32x32/3/1523138400/0/2/0_WgQqicLa-WRiS8cK.png/EP-FMxjO3P2IAyAHKAc/lI0ZceNxBmrURS2EWK6VRrQyFuu2gCIwqTl5XvMDXYA?dl=0&preserve_transparency=1&size=1600x1200&size_mode=3"}/>
                </Slide>
                <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                    <Heading size={4} textColor="tertiary">Donde se usa?</Heading>
                    <List>
                        <ListItem>Web </ListItem>
                        <ListItem>Desktop (Electron) </ListItem>
                        <ListItem>Backend (Nodejs) </ListItem>
                        <ListItem>Mobile (React Native) </ListItem>
                        <ListItem>Bases de Datos (MongoDB) </ListItem>
                        <ListItem>Drones </ListItem>
                        <ListItem>Bots </ListItem>
                        <ListItem>TV (React) </ListItem>
                        <ListItem>Robots (NodeBots) </ListItem>
                        <ListItem>IOT </ListItem>
                    </List>
                </Slide>

                <Slide transition={["fade"]} bgColor="secondary" bgImage={"https://bit.ly/2GHyCVV"}/>
                <Slide transition={["fade"]} bgColor="tertiary" bgImage={"https://bit.ly/2qgGBOl"}/>
                <Slide transition={["fade"]} bgColor="secondary" bgImage={"https://bit.ly/2qhpnR8"}/>
                <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                    <Heading size={4} textColor="tertiary">Rendimiento</Heading>
                    <Appear><Text textColor="primary">Era Lento,</Text></Appear>
                    <Appear><S type={"italic"}>desde el 2007 (Node) ya no lo es.</S></Appear>
                    <Appear><Text textColor="primary">Es solo 2-7 veces mas lento que C++</Text></Appear>
                    <Appear><Text textColor="primary">El lenguaje dinamico más rapido ahi fuera.</Text></Appear>
                    <Appear><Text textColor="primary">Paypal incremento su velocidad por segundo en el 100% migrando de
                        java a nodejs.</Text></Appear>
                    <Appear><Text textColor="primary">Es asincrono de nacimiento, una de sus caracteristicas como las
                        conexiones concurrentes son la sal de la vida para JS</Text></Appear>
                </Slide>
                <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
                    <Heading size={4} textColor="primary">Web Frameworks</Heading>
                    <Table padding={60}>
                        <TableRow>
                            <TableItem>React</TableItem>
                            <TableItem>38%</TableItem>
                        </TableRow>
                        <TableRow>
                            <TableItem>Angular</TableItem>
                            <TableItem>27%</TableItem>
                        </TableRow>
                        <TableRow>
                            <TableItem>Vue</TableItem>
                            <TableItem>22%</TableItem>
                        </TableRow>
                    </Table>
                </Slide>
                <Slide transition={["fade"]} bgColor="secondary">
                    <Heading size={4} textColor="tertiary">NodeJS Frameworks?</Heading>
                    <Text padding={40} textColor="primary">Express </Text>
                    <Text padding={20} textColor="primary">Koa </Text>
                    <Text padding={20} textColor="primary">Fastify </Text>

                </Slide>
                <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
                    <Heading size={4} textColor="primary">React Ecosystem</Heading>
                    <Text padding={40} textColor="secondary">Create-React-App </Text>
                    <Text padding={20} textColor="secondary">Storybook </Text>
                    <Text padding={20} textColor="secondary">Semantic-ui </Text>
                </Slide>
                <Slide transition={["fade"]} bgColor="secondary">
                    <Heading size={4} textColor="tertiary">Mobile Frameworks?</Heading>
                    <Text padding={40} textColor="primary">React Native </Text>
                    <Text padding={20} textColor="primary">Ionic - Angular </Text>
                    <Text padding={20} textColor="primary">Weex - Vue </Text>

                </Slide>
                <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
                    <Heading size={4} textColor="primary">Compilers</Heading>
                    <Text padding={40} textColor="secondary">Babel </Text>
                    <Text padding={20} textColor="secondary">TypeScript</Text>
                    <Text padding={20} textColor="secondary">Flow</Text>
                </Slide>
                <Slide transition={["fade"]} bgColor="secondary">
                    <Heading size={4} textColor="tertiary">Build Tools</Heading>
                    <Text padding={40} textColor="primary">Webpack</Text>
                    <Text padding={20} textColor="primary">Parcel</Text>
                    <Text padding={20} textColor="primary">Gulp</Text>
                </Slide>
                <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
                    <Heading size={4} textColor="primary">Testing</Heading>
                    <Text padding={40} textColor="secondary">Jest</Text>
                    <Text padding={20} textColor="secondary">Ava</Text>
                    <Text padding={20} textColor="secondary">Mocha</Text>
                </Slide>
                <Slide transition={["fade"]} bgColor="secondary">
                    <Heading size={4} textColor="tertiary">Editores</Heading>
                    <Text padding={40} textColor="primary">WebStorm</Text>
                    <Text padding={20} textColor="primary">VS Code</Text>
                    <Text padding={20} textColor="primary">Atom</Text>
                </Slide>
                <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
                    <Heading size={4} textColor="primary">Projectos más populares</Heading>
                    <Appear><Text>Vue.js mas popular del 2017</Text></Appear>
                    <Appear><Text>React</Text></Appear>
                    <Appear><Text>Create-React-App</Text></Appear>
                    <Appear><Text>Axios, Http client library</Text></Appear>
                    <Appear><Text>VS Code</Text></Appear>
                    <Appear><Text>Prettier, Code Formatter</Text></Appear>
                    <Appear><Text>React Native</Text></Appear>
                    <Appear><Text>Electron, desktop apps</Text></Appear>
                    <Appear><Text>Parcel</Text></Appear>
                    <Appear><Text>Node.JS</Text></Appear>
                </Slide>
                <Slide transition={["fade"]} bgColor="secondary" bgImage={"https://bit.ly/2qgZQHT"}/>
                <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                    <Heading size={4} textColor="tertiary">Perfiles mas buscados</Heading>
                    <Appear transition={["fade"]}><Heading padding={40} size={5} textColor="quarternary">Cual Crees? haz
                        una lista por orden</Heading></Appear>
                    <Appear transition={["zoom"]}><Table padding={60}>
                        <TableRow>
                            <TableItem>Backend</TableItem>
                            <TableItem>27%</TableItem>
                        </TableRow>
                        <TableRow>
                            <TableItem>Frontend</TableItem>
                            <TableItem>18%</TableItem>
                        </TableRow>
                        <TableRow>
                            <TableItem>FullStack</TableItem>
                            <TableItem>12%</TableItem>
                        </TableRow>
                        <TableRow>
                            <TableItem>Devops</TableItem>
                            <TableItem>10%</TableItem>
                        </TableRow>
                        <TableRow>
                            <TableItem>Mobile</TableItem>
                            <TableItem>10%</TableItem>
                        </TableRow>
                        <TableRow>
                            <TableItem>QA</TableItem>
                            <TableItem>7%</TableItem>
                        </TableRow>
                        <TableRow>
                            <TableItem>BD</TableItem>
                            <TableItem>3%</TableItem>
                        </TableRow>
                    </Table></Appear>
                </Slide>
                <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
                    <Heading size={4} textColor="secondary">Backend Stack mas usado?</Heading>
                    <Appear><Heading padding={40} size={5} textColor="quarternary">Cual Crees? Dime el que crees que es
                        el primero.</Heading></Appear>
                    <Appear><Table padding={60}>
                        <TableRow>
                            <TableItem>Java</TableItem>
                            <TableItem>25%</TableItem>
                        </TableRow>
                        <TableRow>
                            <TableItem>PHP</TableItem>
                            <TableItem>25%</TableItem>
                        </TableRow>
                        <TableRow>
                            <TableItem>Python</TableItem>
                            <TableItem>18%</TableItem>
                        </TableRow>
                        <TableRow>
                            <TableItem>Javascript</TableItem>
                            <TableItem>13%</TableItem>
                        </TableRow>
                        <TableRow>
                            <TableItem>Ruby</TableItem>
                            <TableItem>7%</TableItem>
                        </TableRow>
                        <TableRow>
                            <TableItem>Go</TableItem>
                            <TableItem>7%</TableItem>
                        </TableRow>
                        <TableRow>
                            <TableItem>Scala</TableItem>
                            <TableItem>5%</TableItem>
                        </TableRow>
                    </Table></Appear>
                </Slide>
                <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                    <Heading size={4} textColor="tertiary">Frontend Framework</Heading>
                    <Appear transition={["fade"]}><Heading padding={40} size={5} textColor="quarternary">Cual Crees? haz
                        una lista por orden</Heading></Appear>
                    <Appear transition={["zoom"]}><Table padding={60}>
                        <TableRow>
                            <TableItem>ReactJS</TableItem>
                            <TableItem>35%</TableItem>
                        </TableRow>
                        <TableRow>
                            <TableItem>Angular</TableItem>
                            <TableItem>31%</TableItem>
                        </TableRow>
                        <TableRow>
                            <TableItem>Jquery</TableItem>
                            <TableItem>15%</TableItem>
                        </TableRow>
                        <TableRow>
                            <TableItem>BackBoneJS</TableItem>
                            <TableItem>10%</TableItem>
                        </TableRow>
                        <TableRow>
                            <TableItem>EmberJS</TableItem>
                            <TableItem>8%</TableItem>
                        </TableRow>
                        <TableRow>
                            <TableItem>VueJS</TableItem>
                            <TableItem>2%</TableItem>
                        </TableRow>
                    </Table></Appear>
                </Slide>
                <Slide transition={["fade"]} bgColor="secondary" bgImage={"https://bit.ly/2GKwWek"} />

                <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                    <Heading size={4} textColor="tertiary" margin={80}>Salarios</Heading>
                    <Table style={"border:1px solid"} padding={40} >
                        <TableRow>
                            <TableHeaderItem><S type={"bold"} textColor={"quarternary"}>&nbsp;&nbsp;&nbsp;&nbsp;Experiencia&nbsp;&nbsp;&nbsp;&nbsp;</S></TableHeaderItem>
                            <TableHeaderItem><S type={"bold"} textColor={"quarternary"}>&nbsp;&nbsp;&nbsp;&nbsp;JobFluent&nbsp;&nbsp;&nbsp;&nbsp;</S></TableHeaderItem>
                            <TableHeaderItem><S type={"bold"} textColor={"quarternary"}>&nbsp;&nbsp;&nbsp;&nbsp;Randstand JS&nbsp;&nbsp;&nbsp;&nbsp;</S></TableHeaderItem>
                            <TableHeaderItem><S type={"bold"} textColor={"quarternary"}>&nbsp;&nbsp;&nbsp;&nbsp;Randstand Java&nbsp;&nbsp;&nbsp;&nbsp;</S></TableHeaderItem>
                        </TableRow>

                        <TableRow padding={80}>
                            <TableItem>Junior 0 - 2 Años </TableItem><TableItem>20K - 30K </TableItem><TableItem>20K -
                            32K </TableItem><TableItem>18K - 27K</TableItem>
                        </TableRow>
                        <TableRow>
                            <TableItem>Senior 2 - 4 Años </TableItem><TableItem>30K - 40K </TableItem><TableItem>32k -
                            44K </TableItem><TableItem>27K - 35K</TableItem>
                        </TableRow>
                        <TableRow>
                            <TableItem>Senior II +4 Años </TableItem><TableItem>40K - 55K </TableItem><TableItem>44K -
                            60K </TableItem><TableItem>35K - 45K</TableItem>
                        </TableRow>
                        <TableRow>
                            <TableItem>High Talent </TableItem><TableItem>55K - 70K </TableItem><TableItem>60K -
                            70K </TableItem><TableItem> 60K</TableItem>
                        </TableRow>


                    </Table>
                </Slide>
                <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                    <Heading size={4} textColor="tertiary" margin={80}>Como lo consigo?</Heading>
                    <Image src={"https://bit.ly/2qhOLGr"}/>
                </Slide>

                <Slide transition={["fade"]} bgColor="secondary" bgImage={"https://bit.ly/2qhakHf"}/>
            </Deck>
        );
    }
}
