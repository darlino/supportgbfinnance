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
  import Modal from 'react-bootstrap/Modal'
 
  import { AiOutlinePlus, AiFillEye, AiFillDelete , AiFillEdit} from 'react-icons/ai'
  import { Editor } from '@tinymce/tinymce-react';
 

  function MyVerticallyCenteredModal(props) {
    const editorRef = React.useRef(null);
    const log = () => {
      if (editorRef.current) {
        console.log(editorRef.current.getContent());
      }
    };

    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter">
            Ajouter une reponse
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div class="form-group">
                <label for="exampleInputPassword1">Titre de la reponse</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div class="form-grourp">
                <label for="exampleInputPassword1">Contenu</label>
                <Editor
                    apiKey='gmnaf6m33n75e3i43wz3cbbsbnv4g5c7n7v8ctcwpo2sk5bw'
                    onInit={(evt, editor) => editorRef.current = editor}
                    initialValue="<p>This is the initial content of the editor.</p>"
                    init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar: 'undo redo | formatselect | ' +
                    'bold italic image | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                />
                <button onClick={log}>Log editor content</button>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
export const Account = () => {

   

    const [modalShow, setModalShow] = React.useState(false);
    return (
        
            <div className="container p-4 ml-4 border-left d-flex flex-column">
            <span className="d-flex justify-content-between p-4 m-2">
                <Heading className="text-center" fontFamily="Fira sans">Compte  </Heading>
                <Button variant="outline"  onClick={() => setModalShow(true)} style = {{ background : "#2B2B2B", color : "#fff"}} >Ajouter une reponse <AiOutlinePlus style={{ margin : "6px"}}/> </Button>
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
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                </div>
            </div>
        
    )
}
