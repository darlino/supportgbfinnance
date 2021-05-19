import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Heading,
    Button
  } from "@chakra-ui/react"
 
  import { AiOutlinePlus, AiFillEye, AiFillDelete , AiFillEdit} from 'react-icons/ai'
export const Technical = () => {
    return (
        
            <div className="container p-4 ml-4 border-left d-flex flex-column">
            <span className="d-flex justify-content-between p-4 m-2">
                <Heading className="text-center" fontFamily="Fira sans">Problemes technique  </Heading>
                <Button variant="outline" style = {{ background : "#2B2B2B", color : "#fff"}} >Ajouter une reponse <AiOutlinePlus style={{ margin : "6px"}}/> </Button>
            </span>
            
                <div>
                <Table variant="striped" >
                    <TableCaption>Propostion de réponse pour le support de global finance</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Titre</Th>
                            <Th isNumeric>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>1</Td>
                            <Td>The thing goes</Td>
                            <Td isNumeric>
                                <div className="d-flex justify-content-around float-right">
                                    <Button variant="outline" style = {{ background : "#3464F5", color : "#fff"}} ><AiFillEye /> </Button>
                                    <Button variant="outline" style = {{ background : "#048F0B", color : "#fff"}} ><AiFillEdit /> </Button>
                                    <Button variant="outline" style = {{ background : "#F52363", color : "#fff"}} ><AiFillDelete /> </Button>
                                </div>
                            </Td>
                        </Tr>
                        
                    </Tbody>
                </Table>
                </div>
            </div>
        
    )
}
