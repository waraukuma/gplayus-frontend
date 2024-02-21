function ComponentAZ() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const name = searchParams.get('name');
    return <div>ID-{id}, NAME-{name}</div>
    }
    function App() {
    return (
    <BrowserRouter>
    <div>
    <h1>React Router DOM</h1>
    <hr />
    <Link to='/a?id=10&name=abc'>이동 (Query String)</Link>
    <Routes>
    <Route path='/1' element={<Component1 />} />
    <Route path='/2' element={<Component2 />} />
    <Route path='/3' element={<Component3 />} />
    <Route path='/:number' element={<ComponentN />} />
    </Routes>
    </div>
    </BrowserRouter>);