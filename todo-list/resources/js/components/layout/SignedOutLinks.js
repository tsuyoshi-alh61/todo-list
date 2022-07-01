import React from 'react';
import Button from '@material-ui/core/Button';
import CommonLink from './common/CommonLink';

export default function SignedOutLinks({styles, cookie}) {
    if(!cookie['name']) {
        return (
            <React.Fragment>
                <Button color="inherit" variant="outlined" className={styles}>
                    <CommonLink to='/' content={`サインアップ`}/>
                </Button>
                <Button color="inherit" variant="outlined" className={styles}>
                    <CommonLink to='/' content={`ログイン`}/>
                </Button>
            </React.Fragment>
        )
    }
    return null;
}