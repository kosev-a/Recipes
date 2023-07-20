import classes from './Footer.module.scss';
import cn from 'classnames';

export const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={cn(classes.wrap, classes.flex_sb)}>
                <p>&#169; Alexander Kosev</p>
                <div className={cn(classes.contacts, classes.flex_sb)}>
                    <p>contacts:</p>
                    <a href="https://github.com/kosev-a" target="_blank" rel="noreferrer">
                        <img
                            src="/img/github.svg"
                            height="30px"
                            alt="github link"
                        />
                    </a>
                    <a href="https://t.me/x_koss" target="_blank" rel="noreferrer">
                        <img
                            src="/img/telegram.svg"
                            height="37px"
                            alt="telegram link"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
};
