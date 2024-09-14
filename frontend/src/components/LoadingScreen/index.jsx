function LoadingScreen() {
    return (
        <div className="loading" style={{
            position: 'absolute',
            width: '100%',
            height: '100vh',
            background: 'rgba(255,255,255, 0.8)',
            color: '#333',
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center'
          }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" width="100px" alt="" />
        </div>
    )
}

export default LoadingScreen;