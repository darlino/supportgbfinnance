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
export const Users = () => {
    return (
        
            <div className="container p-4 ml-4 border-left d-flex flex-column">
            <span className="d-flex justify-content-between p-4 m-2">
                <Heading className="text-center" fontFamily="Fira sans">Utilisateurs  </Heading>
            </span>
            
                <div>
                <Table variant="striped" >
                    <TableCaption>Listes des utilisateurs</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Email</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Darlin</Td>
                            <Td>Noula</Td>
                        </Tr>
                        
                    </Tbody>
                </Table>
                </div>
            </div>
        
    )
}
