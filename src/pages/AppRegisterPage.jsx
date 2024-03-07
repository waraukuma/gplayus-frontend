import { Form, Button } from "react-bootstrap";

export default function AppRegister() {
  return (
    <div className="w-full max-w-2xl m-3 p-3">
      <h1 className="fw-bold">앱등록</h1>
      <p className="text-gray mb-4">
        앱테스터를 모집하시고자 하시면 앱등록을 해주세요.
      </p>
      <Form className="mb-5">
        <Form.Group controlId="formTitle" className="mb-4">
          <Form.Label>앱제목</Form.Label>
          <Form.Control size="lg" type="text" placeholder="title" />
        </Form.Group>

        <Form.Group controlId="forAndroid_url" className="mb-4">
          <Form.Label>앱(App)URL주소</Form.Label>
          <Form.Control size="lg" type="text muted" placeholder="android_url" />
        </Form.Group>

        <Form.Group controlId="formWeb_url" className="mb-4">
          <Form.Label>웹(Web)URL주소</Form.Label>
          <Form.Control size="lg" type="text" placeholder="web_url" />
        </Form.Group>

        <Form.Group controlId="formDescription" className="mb-4">
          <Form.Label>앱 상세설명</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder="description" />
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>첨부파일</Form.Label>
          <Form.Control type="file" />
          <Form.Text className="text-muted">
            이미지, 문서, zip파일, 최대 5MB까지 가능
          </Form.Text>
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="primary" type="submit" onClick={() => {}}>
            등록
          </Button>
        </div>
      </Form>
    </div>
  );
}
