import * as React from 'react';

interface IHeaderMsgProps {
}

const HeaderMsg: React.FunctionComponent<IHeaderMsgProps> = (props) => {
  return (
    <div className="text-center" style={{
        backgroundColor: '#FFCB3D',
        minHeight: '50px',
        width: '100%',
        fontSize: '1.25rem',
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
        paddingTop: '10px'
    }}>
        <strong>You don't have an account yet, please create a new account</strong>
    </div>
  )
};

export default HeaderMsg;
