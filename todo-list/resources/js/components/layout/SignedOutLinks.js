import React from 'react';
import Button from '@material-ui/core/Button';
import CommonLink from './common/CommonLink';

export default function SignedOutLinks({styles}) {
    return (
        <React.Fragment>
            <Button color='inherit' variant='outlined' className={styles}>
                <CommonLink to='/signup' content={'サインアップ'}/>
            </Button>
            <Button color='inherit' variant='outlined' className={styles}>
                <CommonLink to='/signin' content={'サインイン'}/>
            </Button>
        </React.Fragment>
    )
}