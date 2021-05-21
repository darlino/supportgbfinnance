import React, {useState} from 'react'
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
  import axios from 'axios'
  import Modal from 'react-bootstrap/Modal'
  import swal from 'sweetalert'
 
  import { AiOutlinePlus, AiFillEye, AiFillDelete , AiFillEdit, AiFillSave} from 'react-icons/ai'
  import { Editor } from '@tinymce/tinymce-react';
 
  function AddNewAnswer(props) {

    const [content, setContent] = useState(" ")
    const [title, setTitle] = useState("")
    
    
    const editorRef = React.useRef(null);
    const log = () => {
      if (editorRef.current) {
        console.log(editorRef.current.getContent());
      }
    };

   const handleSubmit = e =>{
     e.preventDefault();
     let formData = new FormData
     formData.append("title", title)
     formData.append("content", content)

     axios.post('http://127.0.0.1:8000/api/account', formData,{
      headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
        console.log(res.data)
        if (res.data.status_code === "200"){
          
          return(
            swal({
              title: "Bien joué",
              text: "Votre réponse a été ajouter avec succes",
              icon: "success",
              button: "Ok",
            })
          )
          
        }
        else{
          return(
            swal({
              title: "Erreur",
              text: "Vous n'avez pas rempli tout les champs reesayer",
              icon: "error",
              button: "Réesayer",
            })
          )
        }

    })
   }


   console.log(content)
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
                <textarea type="text" className="form-control" id="exampleInputPassword1" onChange={(e) => setTitle(e.target.value)} placeholder="Entrer le titre de la reponse" />
            </div>
            <div class="form-grourp">
                <label for="exampleInputPassword1">Contenu</label>
                <Editor
                    apiKey='gmnaf6m33n75e3i43wz3cbbsbnv4g5c7n7v8ctcwpo2sk5bw'
                    onInit={(evt, editor) => editorRef.current = editor}
                    onChange = { (e) => setContent(e.target.getContent())}
                    initialValue="<p> </p>"
                    init={{
                    height: 500,
                    menubar: true,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen insertfile',
                        'insertdatetime media table paste code help wordcount tinydrive'
                    ],
                        image_dimensions: true,
                        file_picker_types: 'image',
                        images_upload_url: 'http://127.0.0.1:8000/api/images',
                        images_upload_base_path: 'http://127.0.0.1:8000/',
                        images_upload_handler: function (blobInfo, success, failure) {
                        let data = new FormData();
                        data.append('image', blobInfo.blob(), blobInfo.filename());
                        axios.post('http://127.0.0.1:8000/api/images', data,{
                            headers: {
                            'Content-Type': 'multipart/form-data',
                            Authorization: `Bearer ${window.localStorage.getItem("token")}`
                            }
                        })
                        
                            .then(function (res) {
                                success('http://127.0.0.1:8000'+res.data.location);
                                console.log('http://127.0.0.1:8000'+res.data.location)
                            })
                            .catch(function (err) {
                                failure('HTTP Error: ' + err.message);
                            });
                    },
                    toolbar: 'undo redo | formatselect | ' +
                    'bold italic backcolor | alignleft aligncenter' +
                    'alignright alignjustify | bullist numlist outdent indent ' +
                    'removeformat | help | insertfile link image ',
                    content_style: 'body { font-family:Tahoma,Verdana,sans-serif; font-size:14px }'
                    }}
                />
                <button onClick={log}>Log editor content</button>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} colorScheme="red">Close</Button>
          <Button onClick={handleSubmit} colorScheme="green"> Enregistrer <AiFillSave/></Button>
        </Modal.Footer>
      </Modal>
    );
  }


export const Account = () => {
    const [data,setData] = useState(null)
    const number_elements = 5
    const [count, setCount] = React.useState(1)
    let [page, setPage] = React.useState("")
    const [modalShowAdd, setModalShowAdd] = React.useState(false);
    const [modalShowEdit, setModalShowEdit] = React.useState(false);
    const pages = []
  
    const renderPagination = () =>{
      page = page/number_elements
      console.log(page)
      for (let index = 1; index <= 5; index++) {
        pages.push(Math.floor(index))
      }
    }

      renderPagination()

      const handleFetch = async () =>{
        await axios.get(`http://127.0.0.1:8000/api/account?page=${count}`,{
          headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${window.localStorage.getItem("token")}`
          }})
          .then(res => {
            setData(res.data.data)
          setPage(res.data.total)
          })
       }
       
       React.useEffect(() =>{
          handleFetch()
       }, [count])

    return (
        
            <div className="container p-4 ml-4 border-left d-flex flex-column">
            <span className="d-flex justify-content-between p-4 m-2">
                <Heading className="text-center" fontFamily="Fira sans">Compte  </Heading>
                <Button variant="outline"  onClick={() => setModalShowAdd(true)} style = {{ background : "#2B2B2B", color : "#fff"}} >Ajouter une reponse <AiOutlinePlus style={{ margin : "6px"}}/> </Button>
            </span>
            
                <div>
                <Table variant="striped" >
                    <TableCaption></TableCaption>
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Titre</Th>
                            <Th isNumeric>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                     {data === null ? "yo" : data.map(d => {
                       return (
                        <Tr>
                            <Td>{d.id}</Td>
                            <Td>{d.title}</Td>
                            <Td isNumeric>
                                <div className="d-flex justify-content-around float-right">
                                    <Button variant="outline" style = {{ background : "#3464F5", color : "#fff"}} ><AiFillEye /> </Button>
                                    <Button variant="outline" style = {{ background : "#048F0B", color : "#fff"}} ><AiFillEdit /> </Button>
                                    <Button variant="outline" style = {{ background : "#F52363", color : "#fff"}} ><AiFillDelete /> </Button>
                                </div>
                            </Td>
                        </Tr>
                        
                       )
                     })}
                        
                    </Tbody>
                    <Tfoot className="">
                    <nav aria-label="Page navigation example" className="mt-4">
                        <ul className="pagination t-4">
                          {
                            pages.map(page =>{
                              return(
                                <li class="page-item" style={{ cursor: "pointer"}} onClick={() => setCount(page)}><a class="page-link">{page }</a></li>
                              )
                            })
                          }
                        </ul>
                      </nav>
                    </Tfoot>
                </Table>
                <AddNewAnswer
                    show={modalShowAdd}
                    onHide={() => setModalShowAdd(false)}
                />
                </div>
            </div>
        
    )
}
