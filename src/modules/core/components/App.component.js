import Layout from '../common/components/layout.component';
import UserTable from '../../user/components/table.component';
import '../../../styles/App.css';

function App() {

    return (
        <div className="App">
            <div>
                <Layout>
                    <UserTable />
                </Layout>
            </div>
        </div>
    );
}

export default App;
