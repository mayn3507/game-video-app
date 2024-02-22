import { Button, Grid, GridItem } from "@chakra-ui/react"
import './App.css'


function App() {
 return <Grid templateAreas ={{
    base:`"nav main"`,
    lg: `"nav nav" "aside main"`
    }}>
     <GridItem area ="nav" bg ="coral">
        Nav
        </GridItem>
     <GridItem area ="aside" bg ="gold">
        Aside
        </GridItem>
     <GridItem area ="main" bg ="dodgerblue">
        Main
        </GridItem>
        <Button colorScheme='blue'>Button</Button>
 </Grid>
 
}

export default App
